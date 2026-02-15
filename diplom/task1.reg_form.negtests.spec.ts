import { expect } from 'chai';
import { RegistrationForm } from './task1.reg_form.class';

describe('Registration Form -> Negative tests', () => {
  let form: RegistrationForm;
  beforeEach(() => {
    form = new RegistrationForm();
  });

  it('check empty email', () => {
    expect(form.setEmail('')).to.be.false;
  });

  it('check invalid email - no @', () => {
    expect(form.setEmail('userexample.com')).to.be.false;
  });

  it('check invalid email - no domain', () => {
    expect(form.setEmail('user@')).to.be.false;
  });

  it('check invalid email - space inside', () => {
    expect(form.setEmail('user @example.com')).to.be.false;
  });

  it('check empty password', () => {
    expect(form.setPassword('')).to.be.false;
  });

  it('check short password (<8 chars)', () => {
    expect(form.setPassword('A1b!')).to.be.false;
  });

  it('check long password (>16 chars)', () => {
    expect(form.setPassword('Abcdefghijklmnop1!A')).to.be.false;
  });

  it('check password without uppercase', () => {
    expect(form.setPassword('abcdef1!')).to.be.false;
  });

  it('check password without digit', () => {
    expect(form.setPassword('Abcdefgh!')).to.be.false;
  });

  it('check password without special char', () => {
    expect(form.setPassword('Abcdefg1')).to.be.false;
  });

  it('check that register fails if email is empty', () => {
    form.setPassword('Abcdef1!');
    expect(form.register()).to.equal('Email and password are required');
  });

  it('check that register fails if password is empty', () => {
    form.setEmail('user@example.com');
    expect(form.register()).to.equal('Email and password are required');
  });

  it('check that register fails if email is invalid', () => {
    form.setEmail('invalid-email');
    form.setPassword('Abcdef1!');
    expect(form.register()).to.equal('Invalid email format');
  });

  it('check that register fails if password is invalid', () => {
    form.setEmail('user@example.com');
    form.setPassword('abcdef'); 
    expect(form.register()).to.equal('Password must be 8-16 chars, 1 uppercase, 1 digit, 1 special char');
  });

  it('check that cancel clears even invalid inputs', () => {
    form.setEmail('invalid');
    form.setPassword('123');
    form.cancel();
    expect(form.getEmail()).to.equal('');
    expect(form.getPassword()).to.equal('');
  });
});
