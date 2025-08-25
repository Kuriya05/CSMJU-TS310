const employees: Employee[] =[ 
    { id: 1, name: "Alice", position: "Developer", salary:50000}, 
    { id: 2, name: "Bob", position: "Designer", salary:50000 }, 
    { id: 3, name: "Charlie", position: "Manager", salary:60000 },
]
//ประกาศ Employee เป็น interface
interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}
//สร้างfunction findEmployeeByname
//แสดงผลข้อมูลพนักงานทั้งหมด
//แสดงผลการค้นหาพนักงาน
function findEmployeeByName(name: string): Employee | undefined {
    return employees.find(emp => emp.name.toLowerCase() === name.toLowerCase()
);
}
console.log("สมาชิกทั้งหมด");
employees.forEach(emp => {
    console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
});
const employeeName = "Bob";
const foundEmployee = findEmployeeByName(employeeName);
if (foundEmployee) {
    console.log("ผลการค้นหาพนักงาน:");
    console.log(`ID: ${foundEmployee.id}, Name: ${foundEmployee.name}, Position: ${foundEmployee.position}, Salary: ${foundEmployee.salary}`);
} else {
    console.log("ไม่พบพนักงานที่ต้องการค้นหา");
}