import React, { Component, PropTypes } from 'react';
import PIXI from "pixi.js"

export default class Canvas extends Component {

        /**
        * Define our prop types
        **/
        static propTypes = {
            zoomLevel: PropTypes.number.isRequired
        };

        constructor( props ) { 
            super(props);
        }
        
        /**
        * In this case, componentDidMount is used to grab the canvas container ref, and 
        * and hook up the PixiJS renderer
        **/
        componentDidMount() {
           //Setup PIXI Canvas in componentDidMount
           this.renderer = PIXI.autoDetectRenderer(550, 550);
           this.refs.poemCanvas.appendChild(this.renderer.view);
           
           // create the root of the scene graph
           this.stage = new PIXI.Container();
           this.stage.width = 550;
           this.stage.height = 550;
        }
        /**
        * Render our container that will store our PixiJS game canvas. Store the ref
        **/
        render() {
            return (
                    <div className="view" ref="poemCanvas">              
                    </div>
             );
        }
}