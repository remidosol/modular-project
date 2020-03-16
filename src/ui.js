
export function UI() {
    this.employeeForm = document.getElementById("employee-form");
    this.nameInput = document.getElementById("name");
    this.departmentInput = document.getElementById("department");
    this.salaryInput = document.getElementById("salary");
    this.updateBtn = document.getElementById("update");
    this.employeesTable = document.getElementById("employees");
}


UI.prototype.addEmployeeToUI = function (name, department, salary, id) {

    this.employeesTable.innerHTML += `<tr>
                    <td>${name}</td>
                    <td>${department}</td>
                    <td>${salary}</td>
                    <td>${id}</td>
                    <td><a href="#top" id="update-employee" class="btn btn-danger">Update</a></td>
                    <td><a href="#bottom" id="delete-employee" class="btn btn-danger">Delete</a></td>
                </tr>`;

};


UI.prototype.editOrDeleteEmployees = function(eRef, name, department, salary){

    let employee = eRef.target.parentElement.parentElement;
    employee.children[0].textContent = name;
    employee.children[1].textContent = department;
    employee.children[2].textContent = salary;
};

UI.prototype.deleteEmployee = function(eRef){
    eRef.target.parentElement.parentElement.remove();
};


UI.prototype.displayMessages = function (type, message){
    const alert = document.createElement("div");
    const button = document.createElement("button");

    alert.className = `alert alert-${type} alert-dismissible`;
    alert.innerHTML = `<em>${message}</em>`;

    button.type = "button";
    button.className = "close";
    button.innerHTML = `&times;`;

    alert.appendChild(button);
    this.employeeForm.appendChild(alert);

    button.addEventListener("click", function () {
        alert.remove();
    });

    setTimeout(function () {
        alert.remove();
    }, 5000);
};


UI.prototype.clearAllInputs = function () {
    this.nameInput.value = "";
    this.departmentInput.value = "";
    this.salaryInput.value = "";
    this.updateBtn.style.display = "none";
};