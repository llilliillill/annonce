interface Reviews { rating: number, reviews: number }

export default defineEventHandler (event => {
    const id = getRouterParam(event, 'id')

    const reviews: {[key: number]: Reviews } = {
        1: { rating: 4.3, reviews: 19 },
        2: { rating: 0, reviews: 0 },
        3: { rating: 4.3, reviews: 19 },
        4: { rating: 4.3, reviews: 19 },
        5: { rating: 4.3, reviews: 19 },
        6: { rating: 4.3, reviews: 19 },
        7: { rating: 4.3, reviews: 19 },
        8: { rating: 4.3, reviews: 19 }
    }

    return reviews[Number(id)]
})