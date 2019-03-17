namespace Workers {
    abstract class IPayable {
        abstract increasePay(percent: number): void;
    }

    class Employee extends IPayable {
        increasePay(percent: number) {
            console.log(`Increasing employee salary by ${percent}`);
        }
    }

    class Contractor extends IPayable {
        increasePay(percent: number) {
            console.log(`Increasing contractor's rate by ${percent}`);
        }
    }

    let workers: IPayable[] = [];

    workers[0] = new Employee();
    workers[1] = new Contractor();

    workers.forEach(worker => worker.increasePay(20));

}