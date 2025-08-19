import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const loggedIn = !!localStorage.getItem('token');
  if (!loggedIn) {
    //window.alert('Not authenticated');
    return false;
  }
  return true;
};
