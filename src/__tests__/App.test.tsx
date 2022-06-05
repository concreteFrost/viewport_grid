import { fireEvent, render, screen} from "@testing-library/react";
import { App } from "../App";
import userEvent from '@testing-library/user-event';
import React from 'react';
import ViewPort from './../components/ViewPort/ViewPort';

describe("App test", () => {
  test("App should not crash on load", () => {
    render(<App />)
    const element = screen.getByText('Rows')
    expect(element).toBeInTheDocument()
  })
})

describe("Input Test", () => {
  test("Should return 1 if input field was cleared", () => {
    render(<App />)
    const input = document.getElementById('cols')
    userEvent.clear(input)
    expect(input).toHaveValue(1)
  })
  test("Should only accept numbers between 1 and 10 inclusive", () => {
    render(<App />)
    const input = document.getElementById('cols')
    userEvent.type(input, '11')
    expect(input).toHaveValue(10)
    userEvent.clear(input)
    userEvent.type(input, '-1')
    expect(input).toHaveValue(1)
    userEvent.clear(input)
    userEvent.type(input, '5')
    expect(input).toHaveValue(5)

  })
})

describe("Viewport Test", () => {
  const props = {
    gridRows: 6,
    gridCols: 6,
    navActive: true
  }
  //Mocking ResizeObserver
  class ResizeObserver {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  }
  window.ResizeObserver = ResizeObserver;

  test("Should return correct amount of items based on provided values", () => {
    render(<ViewPort  {...props} />)
    const items = screen.getAllByRole('item')
    expect(items.length).toBe(36)
  })
})

describe('Button test', () => {
  test("Should hide/show navbar", () => {
    render(<App />)
    const btn = screen.getByRole('toggler')
    const nav = screen.getByRole('nav')
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
    expect(nav).toHaveClass('nav_hidden')
    fireEvent.click(btn)
    expect(nav).toHaveClass('nav')
  })
})
