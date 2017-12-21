import { AbstractControl } from "@angular/forms";

export const passMatchermoi = (control: AbstractControl): { [key: string]: boolean } => {
    const matkhaumoi = control.get('matkhaumoi');
    const matkhaumoi_ = control.get('matkhaumoi_');
    if (!matkhaumoi || !matkhaumoi_) return null;
    return matkhaumoi.value === matkhaumoi_.value ? null : { khongtrungpassmoi: true };
};


export const passMatchercu = (control: AbstractControl): { [key: string]: boolean } => {
    const matkhaucu = control.get('matkhaucu');
    const matkhaucu_ = control.get('matkhaucu_');
    if (!matkhaucu || !matkhaucu_) return null;
    return matkhaucu.value === matkhaucu_.value ? null : { khongtrungpasscu: true };
};