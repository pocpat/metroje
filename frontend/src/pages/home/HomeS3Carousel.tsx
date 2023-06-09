import React from 'react';
import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
// import Item from './Item'
import HomeCardPeople from './HomeCardPeople';



function HomeS3Carousel()
// example  //
{
    // var items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!"
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!"
    //     }
    // ]

    return (
        <Carousel>
           next={<img src="http://random.com/next"/>}
   prev={<img src="http://random.com/prev"/>}
        </Carousel>
    )
}
export default HomeS3Carousel;