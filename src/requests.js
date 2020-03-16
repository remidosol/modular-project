import ax from 'axios';

export function Requests() {
    this.req = ax.create({
        baseURL: `http://localhost:3000/employees/`,
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
        // ,timeout:1000
    });
}

Requests.prototype.getRequest = async function () {
    this.rawData = await this.req.get(this.req.baseURL);
    return this.rawData.data;
};

Requests.prototype.postRequest = async function (name, department, salary) {
    this.postData = await this.req.post(this.req.baseURL, {
        name: name,
        department: department,
        salary: salary
    }, {headers: this.req.headers});
    return this.postData;
};

Requests.prototype.putRequest = async function (reqId, name, department, salary) {
    this.putData = await this.req.put(`http://localhost:3000/employees/`+reqId, {
        name: name,
        department: department,
        salary: salary
    }, {headers: this.req.headers});
    return this.putData;
};

Requests.prototype.deleteRequest = async function (id) {
    this.deleted = await this.req.delete(`http://localhost:3000/employees/${id}`);
    return this.deleted;
};

// Requests.prototype.getInfo = async function(){
//     this.info = await this.req.options("http://localhost:3000/employees/1");
//     return this.info;
// };

