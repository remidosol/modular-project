import {Requests} from "./requests";
import {UI} from "./ui";

let ui = new UI();
let request = new Requests();

//Selecting Elements

const employeeForm = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const updateBtn = document.getElementById("update");
const employeesTable = document.getElementById("employees");


//Event Listeners
eventListeners();

function eventListeners() {

    window.addEventListener("DOMContentLoaded", reloadAll);
    employeesTable.addEventListener("click", editOrDeleteEmployee);
    employeeForm.addEventListener("submit", addEmployee);

}


async function addEmployee(e) {

    if (nameInput.value === "" || departmentInput.value === "" || salaryInput.value === "") {
        ui.displayMessages("danger", "Please fill all inputs!");
    } else {
        let quer = false;
        let res;
        try {
            res = await request.getRequest();
            console.log(res);
            for (let el of res) {
                let objEl = {name: el.name, department: el.department, salary: el.salary};
                let objInput = {name: nameInput.value, department: departmentInput.value, salary: salaryInput.value};
                if (JSON.stringify(objEl) === JSON.stringify(objInput)) {
                    quer = true;
                    break;
                }
            }

            let resp;
            if (!quer) {
                resp = await request.postRequest(nameInput.value, departmentInput.value, salaryInput.value);
                console.log(resp);
                ui.addEmployeeToUI(nameInput.value, departmentInput.value, salaryInput.value, resp.data.id);
                ui.displayMessages("success", "Employee adding is successful!");
                ui.clearAllInputs();
            }else {
                ui.displayMessages("warning", "You can't add same employee");
            }
            e.preventDefault();
        } catch (err) {
            console.error(err);
        }
    }
}


async function editOrDeleteEmployee(eSuper) {
    const gotID = eSuper.target.parentElement.parentElement.children[3].textContent;
    if (eSuper.target.id === "update-employee") {
        updateBtn.style.display = "block";
        let req = false;
        let idx;
        let res;
        try {
            res = await request.getRequest();
            for (let el of res) {
                if (el.id === parseInt(gotID)) {
                    req = true;
                    idx = res.indexOf(el);
                }
            }
            if (req) {
                nameInput.value = res[idx].name;
                departmentInput.value = res[idx].department;
                salaryInput.value = res[idx].salary;
                updateBtn.addEventListener("click", editEmployee);
            }
        } catch (err) {
            console.error(err);
            ui.displayMessages("danger", "Employee's info not been got!");
        }

    } else if (eSuper.target.id === "delete-employee") {
        let resp;
        try {
            resp = await request.deleteRequest(gotID);
            console.log(resp);
            ui.deleteEmployee(eSuper);
            ui.displayMessages("success", "Deleting operation is successful!");

        } catch (err) {
            console.error(err);
            ui.displayMessages("danger", "Deleting operation is unsuccessful");
        }
    }

    async function editEmployee(e) {
        if (nameInput.value === "" || departmentInput.value === "" || salaryInput.value === "") {
            ui.displayMessages("danger", "Please fill all inputs!");
        } else {
            let resp;
            try {
                resp = await request.putRequest(gotID, nameInput.value, departmentInput.value, salaryInput.value);
                console.log(resp);
                ui.editOrDeleteEmployees(eSuper, nameInput.value, departmentInput.value, salaryInput.value);
                ui.clearAllInputs();
                ui.displayMessages("success", "Editing operation is successful!");
            } catch (err) {
                console.error(err);
                ui.displayMessages("danger", "Editing operation is unsuccessful!");
            }
        }
    }

}


async function reloadAll(e) {
    let res;
    try {
        res = await request.getRequest();
    } catch (err) {
        console.error(err);
    }
    for (let el of res) {
        ui.addEmployeeToUI(el.name, el.department, el.salary, el.id);
    }

}