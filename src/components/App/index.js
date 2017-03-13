import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <section className="app contained">
          <h1 className="text-center">You got it working!</h1>
          <p>
            Showing up is half the battle, right? Technically, that means your project is half-way finished.
            You can either go finish the other half or take a break from all of your hard work. I'd recommend the latter.
            Give yourself a pat on the back.
          </p>
        </section>
        <Footer />
      </main>
    )
  }
}
