type User = {
  email: string;
  password: string;
};
export class RegistrationForm {
  //поля формы:
  public email: string = '';
  public password: string = '';
  //массив пользователей (имитация базы данных):
  private static users: User[] = [];
  constructor() {}
  //сохраняем email и проверяем его формат, при этом возвращаем true, если email валидный, иначе false
  public setEmail(emailValue: string): boolean {
    const trimmedEmail = emailValue.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //[что-то до @]@[что-то до .].[что-то после .]
    if (!emailRegex.test(trimmedEmail)) {
      return false;
    }
    this.email = trimmedEmail;
    return true;
  }
  //возвращаем текущее значение поля email
  public getEmail(): string {
    return this.email;
  }
  //сохраняем пароль и проверяем его правила + возвращаем true, если пароль валидный, иначе false
  public setPassword(passwordValue: string): boolean {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;

    if (!passwordRegex.test(passwordValue)) {
      return false;
    }
    this.password = passwordValue;
    return true;
  }
  //возвращаем текущее значение поля password
  public getPassword(): string {
    return this.password;
  }
  //метод регистрации пользователя - проверяет email и пароль, добавляет пользователя в "базу" и возвращает строку с результатом
  public register(): string {
    if (!this.email || !this.password) {
      return 'Email and password are required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      return 'Invalid email format';
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
    if (!passwordRegex.test(this.password)) {
      return 'Password must be 8-16 chars, 1 uppercase, 1 digit, 1 special char';
    }
    //проверяем, что email не дублируется в "базе"
    const emailExists = RegistrationForm.users.some(
      user => user.email === this.email
    );
    if (emailExists) {
      return 'Email already exists';
    }
    //пользователь добавлен в массив:
    RegistrationForm.users.push({
      email: this.email,
      password: this.password
    });
    return 'Registration successful';
  }
  //кнопка cancel
  public cancel(): void {
    this.email = '';
    this.password = '';
  }
  //кнопка forgot your password?
  public forgotPassword(): string {
    return 'Redirecting to forgot your password page';
  }
  //функция которая возвращает массив зарегистрированных пользователей:
  public getUsers(): User[] {
    return RegistrationForm.users;
  }
}
