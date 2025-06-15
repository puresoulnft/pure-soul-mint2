// Contract configuration
const CONTRACT_ADDRESS = '0x33df1aeb441456dd1257c1011c6d776e8464ebf5';
const BSC_CHAIN_ID = '0x38'; // BSC Mainnet
const BSC_RPC_URL = 'https://bsc-dataseed1.binance.org/';

// Your complete ABI
const CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "treasuryWallet",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "ERC721EnumerableForbiddenBatchMint",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "ERC721OutOfBoundsIndex",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "adminMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getTokenDetails",
        "outputs": [
            {
                "internalType": "enum PureSoulNFT.Faction",
                "name": "",
                "type": "uint8"
            },
            {
                "internalType": "enum PureSoulNFT.Rarity",
                "name": "",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mintNFT",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "remainingSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "salePrice",
                "type": "uint256"
            }
        ],
        "name": "royaltyInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newBaseURI",
                "type": "string"
            }
        ],
        "name": "setBaseURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_state",
                "type": "bool"
            }
        ],
        "name": "setPaused",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalMinted",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

let provider;
let signer;
let contract;
let userAddress;

// Initialize on page load
window.addEventListener('load', async function() {
    if (typeof window.ethereum !== 'undefined') {
        provider = new ethers.BrowserProvider(window.ethereum);
        
        // Check if already connected
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            await connectWallet();
        }
    }
    
    // Update collection stats
    await updateCollectionStats();
    
    // Update stats periodically
    setInterval(updateCollectionStats, 30000);
});

// FAQ functionality
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const currentItem = faqItems[index];
    const answer = currentItem.querySelector('.faq-answer');
    const isActive = currentItem.classList.contains('active');
    
    // Close all FAQ items
    faqItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').classList.remove('active');
    });
    
    // Open current item if it wasn't active
    if (!isActive) {
        currentItem.classList.add('active');
        answer.classList.add('active');
    }
}

// Wallet connection
async function connectWallet() {
    try {
        const connectButton = document.getElementById('headerConnectBtn');
        connectButton.innerHTML = '<div class="loading-spinner"></div>Connecting...';
        connectButton.disabled = true;

        // Show wallet selection modal
        const walletChoice = await showWalletSelection();
        
        if (walletChoice === 'metamask') {
            await connectMetaMask();
        } else if (walletChoice === 'walletconnect') {
            await connectWalletConnect();
        } else {
            throw new Error('No wallet selected');
        }
        
    } catch (error) {
        console.error('Connection error:', error);
        showStatus('Failed to connect wallet: ' + error.message, 'error');
        
        const connectButton = document.getElementById('headerConnectBtn');
        connectButton.innerHTML = 'Connect Wallet';
        connectButton.disabled = false;
    }
}

// Add wallet selection modal
function showWalletSelection() {
    return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 10000;">
                <div style="background: #1a1a3a; padding: 30px; border-radius: 20px; max-width: 400px; text-align: center;">
                    <h3 style="color: white; margin-bottom: 20px;">Connect Wallet</h3>
                    <button onclick="selectWallet('metamask')" style="width: 100%; padding: 15px; margin: 10px 0; background: #f6851b; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 16px;">MetaMask</button>
                    <button onclick="selectWallet('walletconnect')" style="width: 100%; padding: 15px; margin: 10px 0; background: #3b99fc; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 16px;">WalletConnect</button>
                    <button onclick="selectWallet('cancel')" style="width: 100%; padding: 10px; margin: 10px 0; background: transparent; color: #999; border: 1px solid #444; border-radius: 10px; cursor: pointer;">Cancel</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        window.selectWallet = (choice) => {
            document.body.removeChild(modal);
            delete window.selectWallet;
            resolve(choice);
        };
    });
}

async function connectMetaMask() {
    if (typeof window.ethereum === 'undefined') {
        throw new Error('Please install MetaMask');
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (chainId !== '0x38') {
        await switchToBSC();
    }
    
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    userAddress = await signer.getAddress();
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    
    updateWalletUI();
    await updateCollectionStats();
    showStatus('MetaMask connected successfully!', 'success');
}

async function connectWalletConnect() {
    // For now, show a helpful message and redirect to MetaMask
    showStatus('WalletConnect requires additional setup. Using MetaMask instead...', 'success');
    
    // Check if user is on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // On mobile, try to open MetaMask app
        window.open('https://metamask.app.link/dapp/' + window.location.href, '_blank');
        showStatus('Opening MetaMask app...', 'success');
    } else {
        // On desktop, fallback to MetaMask extension
        await connectMetaMask();
    }
}

// Switch to BSC network
async function switchToBSC() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: BSC_CHAIN_ID }],
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: BSC_CHAIN_ID,
                        chainName: 'BNB Smart Chain',
                        nativeCurrency: {
                            name: 'BNB',
                            symbol: 'BNB',
                            decimals: 18,
                        },
                        rpcUrls: [BSC_RPC_URL],
                        blockExplorerUrls: ['https://bscscan.com/'],
                    }],
                });
            } catch (addError) {
                throw new Error('Failed to add BSC network');
            }
        } else {
            throw switchError;
        }
    }
}

// Update wallet UI
function updateWalletUI() {
    const walletInfo = document.getElementById('walletInfo');
    const connectButton = document.getElementById('headerConnectBtn');
    const modalMintBtn = document.getElementById('modalMintBtn');

    if (userAddress) {
        walletInfo.innerHTML = `
            <div style="margin-bottom: 10px; color: #22c55e; font-weight: 600;">✓ Wallet Connected</div>
            <div class="wallet-address">${userAddress}</div>
        `;
        connectButton.innerHTML = 'Connected';
        connectButton.disabled = true;
        
        if (modalMintBtn) {
            modalMintBtn.disabled = false;
        }
    }
}

// Update collection stats from contract
async function updateCollectionStats() {
    try {
        if (!contract) {
            // Create read-only contract for stats
            const readProvider = new ethers.JsonRpcProvider(BSC_RPC_URL);
            const readContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, readProvider);
            
            const totalSupply = await readContract.totalSupply();
            const remainingSupply = await readContract.remainingSupply();
            
            document.getElementById('mintedCount').textContent = totalSupply.toString();
            document.getElementById('remainingCount').textContent = remainingSupply.toString();
        } else {
            const totalSupply = await contract.totalSupply();
            const remainingSupply = await contract.remainingSupply();
            
            document.getElementById('mintedCount').textContent = totalSupply.toString();
            document.getElementById('remainingCount').textContent = remainingSupply.toString();
        }
    } catch (error) {
        console.error('Error updating stats:', error);
        document.getElementById('mintedCount').textContent = 'Error';
        document.getElementById('remainingCount').textContent = 'Error';
    }
}

// Mint NFT function
async function mintNFT() {
    if (!contract || !userAddress) {
        showStatus('Please connect your wallet first', 'error');
        return;
    }

    try {
        const mintButton = document.getElementById('modalMintBtn');
        mintButton.innerHTML = '<div class="loading-spinner"></div>Minting...';
        mintButton.disabled = true;

        showStatus('Preparing transaction...', 'pending');

        // Check if minting is paused
        const isPaused = await contract.paused();
        if (isPaused) {
            throw new Error('Minting is currently paused');
        }

        // Check remaining supply
        const remaining = await contract.remainingSupply();
        if (remaining == 0) {
            throw new Error('Collection is sold out');
        }

        showStatus('Confirm transaction in your wallet...', 'pending');

        // Execute mint transaction
        const tx = await contract.mintNFT({
            value: ethers.parseEther('0.1')
        });

        showStatus(`Transaction submitted! Hash: ${tx.hash}`, 'pending');

        // Wait for confirmation
        const receipt = await tx.wait();
        
        if (receipt.status === 1) {
            showStatus('🎉 NFT minted successfully!', 'success');
            await updateCollectionStats();
        } else {
            throw new Error('Transaction failed');
        }

    } catch (error) {
        console.error('Mint error:', error);
        let errorMessage = 'Minting failed: ';
        
        if (error.code === 'ACTION_REJECTED') {
            errorMessage += 'Transaction was rejected by user';
        } else if (error.message.includes('insufficient funds')) {
            errorMessage += 'Insufficient funds for minting';
        } else if (error.message.includes('Max supply reached')) {
            errorMessage += 'Collection is sold out';
        } else if (error.message.includes('Send 0.1 BNB')) {
            errorMessage += 'Incorrect payment amount';
        } else {
            errorMessage += error.message;
        }
        
        showStatus(errorMessage, 'error');
    } finally {
        const mintButton = document.getElementById('modalMintBtn');
        mintButton.innerHTML = 'Mint Divine Ascendant';
        mintButton.disabled = !userAddress;
    }
}

// Modal functions
function openWalletModal() {
    const modal = document.getElementById('walletModal');
    modal.classList.add('active');
    
    if (!userAddress) {
        connectWallet();
    }
}

function closeWalletModal() {
    const modal = document.getElementById('walletModal');
    modal.classList.remove('active');
    
    // Clear any status messages
    const statusDiv = document.getElementById('statusMessage');
    statusDiv.style.display = 'none';
}

// Show status messages
function showStatus(message, type) {
    const statusDiv = document.getElementById('statusMessage');
    statusDiv.className = `status-message status-${type}`;
    statusDiv.textContent = message;
    statusDiv.style.display = 'block';

    // Auto-hide success/error messages after 5 seconds
    if (type === 'success' || type === 'error') {
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }
}

// Handle account changes
if (window.ethereum) {
    window.ethereum.on('accountsChanged', function(accounts) {
        if (accounts.length === 0) {
            // User disconnected
            userAddress = null;
            contract = null;
            document.getElementById('walletInfo').textContent = 'Connect your wallet to start minting';
            document.getElementById('headerConnectBtn').innerHTML = 'Connect Wallet';
            document.getElementById('headerConnectBtn').disabled = false;
            const modalMintBtn = document.getElementById('modalMintBtn');
            if (modalMintBtn) {
                modalMintBtn.disabled = true;
            }
        } else {
            // User switched accounts
            connectWallet();
        }
    });

    window.ethereum.on('chainChanged', function(chainId) {
        // Reload page on network change
        window.location.reload();
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('walletModal');
    if (event.target === modal) {
        closeWalletModal();
    }
}