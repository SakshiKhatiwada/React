const Item = ({ isReady, isDelivered, name }) => {
    return (
        <li className="items">{name} {isReady && '✅'} {isReady && isDelivered && '🚚'}</li>
    )

}


const ReadyList = () => {
    return (
        <section className="bakeryList">
            <h1>Our Bakery&apos;s Ready List</h1>
            <p><i>All are the lists of items with two additional info Ready ✅ and Delivered 🚚</i></p>
            {/* escaping char for apostrophe */}
            <ul>
                <Item isReady={true} isDelivered={true} name="Strawberry Cake" />
                <Item isReady={false} isDelivered={false} name="Vanilla Cake" />
                <Item isReady={true} isDelivered={true} name="Cup Cake" />
                <Item isReady={true} isDelivered={false} name="Chocolate Ice-cream" />
                {/* yes, our bakery sells ice-cream :) */}
                <Item isReady={false} isDelivered={true} name="Strawberry Ice-cream" />
                <Item isReady={true} isDelivered={false} name="Chocolate Cake" />
                <Item isReady={true} isDelivered={false} name="Cookies" />
            </ul>
        </section>
    )
}



export default ReadyList