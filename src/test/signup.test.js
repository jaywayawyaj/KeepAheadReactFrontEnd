import SignUp from '../components/signup.js'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'

describe('Sign up', () => {

  const wrapper = mount(
    <SignUp/>
  )

  it('displays a form to signup with', () => {
    expect(wrapper.find(<form></form>)).toBeTruthy();
  });

  it('the form can take a venuename', () => {
    console.log(wrapper.find(<form></form>))
    expect(wrapper.contains("venuename")).toBeTruthy()
  })



})
