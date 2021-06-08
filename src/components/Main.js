import React from 'react';
import HornedBeast from './HornedBeast';



class Main extends React.Component {

 
render() {

    return (

        <div>
            {this.props.DataElement.map((beasts) => {
              
              return (

                    <HornedBeast
                        title={beasts.title}
                        imgUrl={beasts.image_url}
                        description={beasts.description}
                       dataHandling={this.props.show}
                       popUpTheCard={this.props.popUpTheCard}

                    />
                )
            })

            }

        </div>



    )
}
}



export default Main;
