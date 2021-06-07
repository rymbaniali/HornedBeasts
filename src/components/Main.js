import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './Data.json';

class Main extends React.Component {
    render() {

        return (

            <div>
                {Data.map((beasts) => {
                    return (


                        <HornedBeast
                            title={beasts.title}
                            imgUrl={beasts.image_url}
                            description={beasts.description}

                        />
                    )
                })

                }

            </div>


//         return (
//             <main>
//                 <h2> UniWhal </h2>
//                 <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="img1" />

//                 <p> A unicorn and a narwhal nuzzling their horns" "keyword": "narwhal </p>

//                 <h2>rhino</h2>
//                 <img src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" /> ;
//                 <p> "Mother (or father) rhino with two babies" </p>

//                 <h2>Unicorn Head</h2>
//                 <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" /> ;
//                 <p> "Someone wearing a creepy unicorn head mask" </p>

//             </main>
//
        )
    }
}



export default Main;
