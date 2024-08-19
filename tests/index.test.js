test('returns object with {hello: "world"}', () => {
    return fetch("http://localhost:5000").then(data => data.json()).then(data => {
        expect(data).toEqual({"hello": "world"})
    })
})