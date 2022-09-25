import { Component } from "react"

export default class Hero extends Component {
render(){
    return( <section className="Hero container-fluid">
                <video autoplay muted loop id="myVideo">
                    <source src="/assets/2.mp4" type="video/mp4" />
                </video>
            </section>);
    }
}