const whyBtn = document.getElementById('button-why');

document.getElementById('button-next').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('answer').style.display = 'block';
    document.getElementById('answer').innerHTML = '';


    axios
        .get('https://official-joke-api.appspot.com/random_joke')
        .then((response) => {
            console.log(response.data);
            document.getElementById('joke').innerHTML = response.data.setup;
            whyBtn.addEventListener('click', function () {
                document.getElementById('answer').innerHTML = response.data.punchline;
            }
            );

        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })

});

