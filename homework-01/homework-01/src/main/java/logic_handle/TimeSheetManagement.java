package logic_handle;

import entity.Factory;
import entity.TimeSheet;
import entity.TimeSheetDetail;
import entity.Worker;

import java.util.*;

public class TimeSheetManagement {

    private List<TimeSheet> timeSheets;
    private WorkerManagement workerManagement;
    private FactoryManagement factoryManagement;

    public TimeSheetManagement(WorkerManagement workerManagement, FactoryManagement factoryManagement) {
        this.timeSheets = new ArrayList<>();
        this.workerManagement = workerManagement;
        this.factoryManagement = factoryManagement;
    }

    public void logTimeSheet() {
        if (workerManagement.isEmptyWorker() || factoryManagement.isEmptyFactory()) {
            System.out.println("Cần nhập danh sách công nhân và nhà máy trước khi thực hiện chấm công");
            return;
        }
        System.out.println("Muốn chấm công cho bao nhiều công nhân:");
        int workerNumber;
        do {
            try {
                workerNumber = new Scanner(System.in).nextInt();
                if (workerNumber > 0) {
                    break;
                }
                System.out.println("Số lượng công nhân nhập vào phải lơn hơn 0, nhập lại: ");
            } catch (InputMismatchException ex) {
                System.out.println("Vui lòng nhập số: ");
            }
        } while (true);

        for (int i = 0; i < workerNumber; i++) {
            System.out.println("Nhập ID của công nhân thứ " + (i + 1) + " mà bạn muốn chấm công: ");
            int workerId;
            Worker worker;
            do {
                try {
                    workerId = new Scanner(System.in).nextInt();
                    worker = workerManagement.findById(workerId);
                    if (worker != null) {
                        break;
                    }
                    System.out.println("ID không tồn tại trong hệ thống, vui lòng nhập lại: ");
                } catch (InputMismatchException ex) {
                    System.out.println("Vui lòng nhập số: ");
                }
            } while (true);

            System.out.println("Công nhân này làm việc ở bao nhiêu xưởng trong tháng vùa rồi: ");
            int factoryNumber;
            do {
                try {
                    factoryNumber = new Scanner(System.in).nextInt();
                    if (factoryNumber > 0) {
                        break;
                    }
                    System.out.println("Số lượng xưởng nhập vào phải lơn hơn 0, nhập lại: ");
                } catch (InputMismatchException ex) {
                    System.out.println("Vui lòng nhập số: ");
                }
            } while (true);

            List<TimeSheetDetail> timeSheetDetails = new ArrayList<>();
            for (int j = 0; j < factoryNumber; j++) {
                System.out.println("Nhập mã xưởng thứ " + (j + 1) + " mà ông này đã làm việc trong tháng vừa rồi: ");
                int factoryId;
                Factory factory;
                do {
                    try {
                        factoryId = new Scanner(System.in).nextInt();
                        factory = factoryManagement.findById(factoryId);
                        if (factory != null) {
                            break;
                        }
                        System.out.println("ID không tồn tại trong hệ thống, vui lòng nhập lại: ");
                    } catch (InputMismatchException ex) {
                        System.out.println("Vui lòng nhập số: ");
                    }
                } while (true);

                System.out.println("Công nhân này làm việc ở xưởng vừa nhập là bao nhiêu ngày: ");
                int workingDay;
                do {
                    try {
                        workingDay = new Scanner(System.in).nextInt();
                        if (workingDay > 0) {
                            break;
                        }
                        System.out.println("Số ngày làm việc nhập vào phải lơn hơn 0, nhập lại: ");
                    } catch (InputMismatchException ex) {
                        System.out.println("Vui lòng nhập số: ");
                    }
                } while (true);

                TimeSheetDetail timeSheetDetail = new TimeSheetDetail(factory, workingDay);
                timeSheetDetails.add(timeSheetDetail);
            }

            TimeSheet timeSheet = new TimeSheet(worker, timeSheetDetails);
            timeSheets.add(timeSheet);
        }
        showInfo();
    }

    public void showInfo() {
        timeSheets.forEach(System.out::println);
    }

    public void calculateSalary() {
        if (this.timeSheets.isEmpty()) {
            System.out.println("Cần thực hiện chấm công cho nhân viên trước khi tính lương");
            return;
        }

        timeSheets.forEach(worker -> {
            float salary = 0;
            List<TimeSheetDetail> timeSheetDetails = worker.getTimeSheetDetails();
            for (int i = 0; i < timeSheetDetails.size(); i++) {
                TimeSheetDetail timeSheetDetail = timeSheetDetails.get(i);
                float tempSalary = timeSheetDetail.getWorkingDay() / 22 * timeSheetDetail.getFactory().getProductivity() * worker.getWorker().getLevel().level * 450000;
                salary += tempSalary;
            }
            System.out.println("Lương của công nhân " + worker.getWorker().getName() + " là: " + salary);
        });
    }

    public void sortMenu() {
        System.out.println("-------_SẮP XẾP DANH SÁCH CHẤM CÔNG--------");
        System.out.println("1. Sắp xếp theo tên công nhân");
        System.out.println("2. Sắp xếp theo tên xưởng");
        System.out.println("3. Quay lại menu chính");
        int choice;
        do {
            try {
                choice = new Scanner(System.in).nextInt();
                if (choice >= 1 && choice <= 3) {
                    break;
                }
                System.out.println("Lựa chọn không hợp lệ, vui lòng chọn lại: ");
            } catch (InputMismatchException ex) {
                System.out.println("Vui lòng nhập số từ 1 tới 3: ");
            }
        } while (true);
        switch (choice) {
            case 1:
                sortByWorkerName();
                showInfo();
                break;
            case 2:
                sortByFactoryName();
                showInfo();
                break;
            case 3:
                return;
        }
    }

    private void sortByFactoryName() {
        this.timeSheets.forEach(timesheet ->
                timesheet.getTimeSheetDetails().sort((d1, d2) ->
                        d1.getFactory().getName().compareToIgnoreCase(d2.getFactory().getName())
                )
        );
    }

    private void sortByWorkerName() {
        this.timeSheets.sort((worker1, worker2) -> worker1.getWorker().getName().compareToIgnoreCase(worker2.getWorker().getName()));

    }

}
