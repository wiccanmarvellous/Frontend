let count = 0;
const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0]

const checkFunc = (id) => {
    const cell = document.getElementById(`${id}`);
    const header = document.getElementById('heading');
    let x;

    if ((count & 1) != 1) {
        arr[parseInt(id[1])] = 1;
        cell.innerHTML = "<img src='assets/cross.png'>"
        x = 'X';
    } else {
        arr[parseInt(id[1])] = 2;
        cell.innerHTML = "<img src='assets/circle.png'>"
        x = 'O';
    }
    count++;

    console.log(arr);


    if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] != 0)
        header.textContent = `Player ${x} won !!!`
    else if (arr[3] == arr[4] && arr[4] == arr[5] && arr[5] != 0)
        header.textContent = `Player ${x} won !!!`
    else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[8] != 0)
        header.textContent = `Player ${x} won !!!`
    else if (arr[0] == arr[3] && arr[3] == arr[6] && arr[6] != 0)
        header.textContent = `Player ${x} won !!!`
    else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[7] != 0)
        header.textContent = `Player ${x} won !!!`
    else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[8] != 0)
        header.textContent = `Player ${x} won !!!`
    else if (arr[0] == arr[4] && arr[4] == arr[8] && arr[8] != 0)
        header.textContent = `Player ${x} won !!!`
    else if (arr[2] == arr[4] && arr[4] == arr[6] && arr[6] != 0)
        header.textContent = `Player ${x} won !!!`
    else
        return;

    setTimeout(() => {
        
        header.textContent = 'Tic-Tac-Toe';
        
        document.querySelectorAll('.col').forEach((i) => {
            i.innerHTML = '';
        })
        
    }, 2000);
    
    arr.fill(0);
    console.log(arr);

    return;
}



document.addEventListener('click', (event) => {
    checkFunc(event.target.id);
})