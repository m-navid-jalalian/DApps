url="http://127.0.0.1:7545";
web3provider = null;
web3 = null;
currentAccount = null;
contaracts = {};

$(function(){
    $(window).load(function(){
        initWeb3();
    });
});

function initWeb3(){
    ethereum.on('accountsChanged', handleAccountsChanged);
    ethereum.on('chainChanged', handleChainChanged);
    return connectWallet();
}

//function to connect to MetaMask
async function connectWallet() {
    ethereum.request({method: 'eth_requestAccounts'}).then(function(accounts){
        currentAccount= accounts[0];
        web3.eth.defaultAccount= currentAccount;
        console.log('Current Account: ',currentAccount);
        $('#current_account').text(currentAccount);
    }).catch(function(err){ //use catch when something goes wrong
        alert('Please ensure that you have installed and logged in to MetaMask!');
    });

    const provider= await detectEthereumProvider();
    if (provider) {
        //if a web3 instance is already provided by MetaMask
        web3provider= provider;
    } else {
        //specify default instance if no web3 instance provided
        web3provider= new Web3.providers.HttpProvider(url);
    }
    
    web3= new Web3(web3provider);
    return initContrcat();
}
function initContrcat(){




    return bindEvents;
}

//set events for all button on page
function bindEvents(){
    $(document).on('click','#current_account',connectWallet);
    $(document).on('click','#set',sendValue);
    $(document).on('click','#get',callValue);
}

function sendValue(){

}

function callValue(){

}

function handleAccountsChanged(){
    return connectWallet;
}
function handleChainChanged(){
    window.location.reload;
}