import { expect } from 'chai';
import { RegistrationForm } from './task1.reg_form.class';

describe('Registration Form -> Positive tests', () => {
  let form: RegistrationForm;
  beforeEach(() => {
    form = new RegistrationForm();
  });

  it('check that valid email is accepted - normal', () => {
    expect(form.setEmail('test@example.com')).to.be.true;
  });

  it('check that valid email is accepted - subdomain', () => {
    expect(form.setEmail('user@mail.example.co')).to.be.true;
  });

  it('check that valid email is accepted - plus sign', () => {
    expect(form.setEmail('user+tag@example.com')).to.be.true;
  });

  it('check that password with 8 chars, uppercase, digit, special is accepted', () => {
    expect(form.setPassword('Abcdef1!')).to.be.true;
  });

  it('check that password with 16 chars, uppercase, digit, special is accepted', () => {
    expect(form.setPassword('Abcdefghijkl1!A')).to.be.true;
  });

  it('check that register succeeds with valid email & password', () => {
    form.setEmail('user@example.com');
    form.setPassword('Abcdef1!');
    expect(form.register()).to.equal('Registration successful');
    expect(form.getUsers()).to.have.lengthOf(1);
  });

  it('check that cancel button clears the fields', () => {
    form.setEmail('a@b.com');
    form.setPassword('Abcdef1!');
    form.cancel();
    expect(form.getEmail()).to.equal('');
    expect(form.getPassword()).to.equal('');
  });

  it('check that forgotPassword returns redirect message', () => {
    expect(form.forgotPassword()).to.equal('Redirecting to forgot your password page');
  });

  it('check that multiple users registration is allowed', () => {
    form.setEmail('user1@example.com');
    form.setPassword('Abcdef1!');
    form.register();
    form.setEmail('user2@example.com');
    form.setPassword('Xyz123!@');
    form.register();
    expect(form.getUsers()).to.have.lengthOf(2);
  });

  it('check that email validation trims spaces', () => {
    expect(form.setEmail('   user@example.com  ')).to.be.true;
    expect(form.getEmail()).to.equal('user@example.com');
  });

  it('check that password validation with special chars works', () => {
    expect(form.setPassword('Aa1!@#$%')).to.be.true;
  });

  it('check that email with numeric domain is valid', () => {
    expect(form.setEmail('user@domain123.com')).to.be.true;
  });

  it('check exactly 8 chars in password', () => {
    expect(form.setPassword('A1b2c3!@')).to.be.true;
  });

  it('check exactly 16 chars in password', () => {
    expect(form.setPassword('Abcdef1!Abcdef1!')).to.be.true;
  });

  it('check that register stores correct email in database', () => {
    form.setEmail('db@example.com');
    form.setPassword('Abcdef1!');
    form.register();
    expect(form.getUsers()[0].email).to.equal('db@example.com');
  });
});


 
