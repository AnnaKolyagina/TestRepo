type User = {
  email: string;
  password: string;
};

export class RegistrationForm {
  //поля формы:
  public email: string = '';
  public password: string = '';
  //массив пользователей (имитация базы данных):
  private users: User[] = [];
  constructor() {}
  //сохраняем email и проверяем его формат, при этом возвращаем true, если email валидный, иначе false
  public setEmail(emailValue: string): boolean {
    this.email = emailValue.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//[что-то до @]@[что-то до .].[что-то после .]
    return emailRegex.test(this.email);
  }
  //возвращаем текущее значение поля email
   public getEmail(): string {
    return this.email;
  }
  //сохраняем пароль и проверяем его правила + возвращаем true, если пароль валидный, иначе false
  public setPassword(passwordValue: string): boolean {
    this.password = passwordValue;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
    return passwordRegex.test(this.password);
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
    if (!this.setEmail(this.email)) {
      return 'Invalid email format';
    }
    if (!this.setPassword(this.password)) {
      return 'Password must be 8-16 chars, 1 uppercase, 1 digit, 1 special char';
    }
    //пользователь добавлен в массив:
    this.users.push({ email: this.email, password: this.password });
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
    return this.users;
  }
}
