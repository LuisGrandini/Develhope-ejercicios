function calculateSalary(a) {
    switch (a) {
        case "ceo":
            a = "2200€";
            break;
        case "manager":
            a = "1800€";
            break;
        case "cto":
            a = "1800€";
            break;
        case "developer":
            a = "1500€";
            break;
        default:
            a = "1000€";
            break;
    }
    return a
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);