const latlongEstacoes = [
    {
        name: "PTS-EST1",
        lat: -22.516754748275332,
        long: -43.169708099084836,
    },
    {
        name: "PTS-EST2",
        lat: -22.507652093179875,
        long: -43.191719245814944
    },
    {
        name: "PTS-EST3",
        lat: -22.392055949152912,
        long: -43.13089733638718
    }
]

const myLocation = [-22.483734, -43.2653595]

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}


const distanceEst = []
for (let index = 0; index < latlongEstacoes.length; index++) {
    const element = latlongEstacoes[index];
    const result = getDistanceFromLatLonInKm(myLocation[0], myLocation[1], element.lat, element.long)
    distanceEst.push({ name: element.name, distance: result })
}

const names = distanceEst.filter(element => element.distance < 20)
console.log(names)