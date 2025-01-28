import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

interface ItemProps {
    item: {
        name: string;
        description: string;
        imageUrl: string;
    };
}

// Removed unused ExampleProps interface

function Example() {
    const items: ItemProps['item'][] = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imageUrl: "https://via.placeholder.com/400x300"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            imageUrl: "https://via.placeholder.com/400x300"
        }
    ];

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    );
}

function Item(props: ItemProps) {
    return (
        <Paper>
            <img src={props.item.imageUrl} alt={props.item.name} style={{ width: '100%', height: 'auto' }} />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    );
}

export default Example;
