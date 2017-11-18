export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  incrementCount(active: boolean) {
    if (active)
      this.activeToInactive++;
    else
      this.inactiveToActive++;

    console.log("inactiveToActive: " + this.inactiveToActive +
      " activeToInactive: " + this.activeToInactive);
  }
}
