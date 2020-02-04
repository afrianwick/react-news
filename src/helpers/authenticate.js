import React from 'react'
import { Redirect } from 'react-router-dom'

export function authenticate (Component, token) {
  return token ? (
    <div>
      {Component}
    </div>
  ) : <Redirect to="/login" />
}