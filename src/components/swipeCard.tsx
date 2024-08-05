import TinderCard from 'react-tinder-card'

// ...

export const SwipeCard = () => {
    const onSwipe = (direction: any) => {
        alert('You swiped: ' + direction)
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier: any) => {
        alert(myIdentifier + ' left the screen')
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            // preventSwipe={['right', 'left']}
        >
            Hello, World!
        </TinderCard>
    )
}