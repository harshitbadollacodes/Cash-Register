    let inputText = document.querySelector(".inputText");
    let cash = document.querySelector(".cash");        
    cash.disabled = true;


    inputText.addEventListener('input', (e) => {
        if (e.target.value.length > 0) {
            cash.disabled = false;
        }
    });

    let currency = document.querySelector('.currency');

    function message(m) {
        let p = document.createElement('p');      
        p.textContent = m;
        return p;
    }
    
    document.querySelector(".btn").addEventListener("click", () => {
        // prefixing '+' to convert to number
        let billAmount = +inputText.value;
        let cashRecd = +cash.value;

        if (cashRecd < billAmount) {                      
            currency.appendChild(message('Cash paid is less than bill amount. Please give more'));
        } else if(cashRecd === billAmount) {
            currency.appendChild(message(`Thank you tendering exact amount.`));
        } else {
            let balance = cashRecd - billAmount;
            let currency = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

            currency.forEach((note) => {
                if (balance !== 0) {
                    let numberOfNotes = Math.floor(balance / note);
                    balance = balance - numberOfNotes * note;
                    
                    if (numberOfNotes === 0) {
                            return '';
                        } else {
                            document.querySelector('.currency').appendChild(message(`₹ ${note} * ${numberOfNotes}`));
                    }
                }
            });
            
        };

        
    });