export function D(sides, qty = 1) {
    let score = 0;
    for (let d = 0; d < qty; d++) {
        score += Math.floor(Math.random() * sides) + 1
    }
    return score;
}

export function D3(qty = 1) {
    return D(3, qty);
}

export function D6(qty = 1) {
    return D(6, qty);
}
