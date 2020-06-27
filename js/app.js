const btnInsert = document.getElementById("btnInsert");
const btnClear = document.getElementById("btnClear");
const localStorageOutput = document.getElementById("localStorageOutput");

const elem = `
            <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert" style="width: 32rem;">
            <strong>Alert</strong> The Data with the same value already exist!.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>`;

const showAlert = () =>  localStorageOutput.innerHTML = elem;
btnClear.onclick = e => localStorage.clear(e);
btnInsert.onclick = e => {
    e.preventDefault()
    
    const Key    = document.getElementById("inKey").value;
    const Val    = document.getElementById("inVal").value;

    if(Key && Val) {
        localStorage.setItem(Key, Val)
        document.getElementById("inKey").value = ''
        document.getElementById("inVal").value = ''

        for(let i=0; i<localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
    
            if(value){
            localStorageOutput.innerHTML += `
                <div class="card mt-2" style="width: 32rem;">
                    <div class="card-header">
                        <strong>${key}</strong>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">${value}</li>
                    </ul>
                </div>`;
            }
            else {
                localStorageOutput.innerHTML = 'The Data with the same value already exist'
            }
        }       
    }
    else {
        showAlert()
    }
}

