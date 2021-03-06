Application up and running: https://rushank-nft-marketplace.netlify.app/<br>
Connect your wallet to ropsten network and wait for a few seconds, it might show "No NFTs listed yet" before NFTs load. Fund your wallet with some ropsten eth to buy/sell nft.

Deployed on Ropsten testnet: 0xA3b10D635C92a5A1ae051293C26a107c272cc34B


## Features:
- Buy the NFTs listed on marketplace, and resell them at higher price for profits.
- Create NFT of your ART.
- Pay listing price(0.025 ETH) to list your NFT on Marketplace.
- Earn ROYALTIES (2% from seller's profit) from your NFT reselling. 


## Frontend:
- Home- will show all nfts listed for sale
- Create NFT- to create your token
- My NFTs- will display all the nfts owned by you
- My Creation- will display all the nfts you created with their latest selling price

## Solidity Contract:
- Dependencies used:
  1. @openzeppelin/contracts/utils/Counters.sol
    To track the tokens minted and sold on the marketpalce.
  2. @openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol
    To support off-chain storage of NFT artifacts.
  3. @openzeppelin/contracts/token/ERC721/ERC721.sol
    Standard for representing ownership of non-fungible tokens (introducing uniqueness)
    
- State Varibales:
  - Counters.Counter private _tokenIds;  // unique token Id for every minted token
  - Counters.Counter private _itemsSold; // total items listed on marketplace
  - uint256 listingPrice = 0.025 ether; 
  - address payable owner; // creator of market place who will recieve listingPice whenevr a NFT is sold
  - struct MarketItem {uint256 tokenId; address payable seller; address payable owner; uint256 price; bool sold;} // info of NFT
  - struct MarketItem_for_Royalty {address payable creator; uint256 pre_price; uint256 royalty_earned;} // royalty info of NFT
  - mapping(uint256 => MarketItem) private idToMarketItem; // store info for every tokenId 
  - mapping(uint256 => MarketItem_for_Royalty) private idToMarketItem_for_Royalty;  // store royalty info for every tokenId
  - event MarketItemCreated(uint256 indexed tokenId, address seller, address owner, uint256 price, bool sold); 
  - event MarketItem_for_RoyaltyCreated(address creator, uint256 pre_price, uint256 royalty_earned); 

- Functions:
  - function createToken(string memory tokenURI, uint256 price) public payable returns (uint256) {}
     - Mint new token
     - set URI for the token
     - add token as a market item by modifying state variable (uses createMarketItem())
  
  - function createMarketItem(uint256 tokenId, uint256 price) private {}
     - make changes to the state variables to store all token info
     - transfer token from creator to contract address
     - charges 0.025 ETH as listing fee
     - list nft 

  - function createMarketSale(uint256 tokenId) public payable {}
    - calculate royalty (if not first time sell), and send it to creator
    - transfer token from contract address to buyer
    - modify state variables

  - function resellToken(uint256 tokenId, uint256 price) public payable {}
    - to list a token (bought before) for sale
    - charges 0.025 ETH as listing fee
    - transfers nft from owner to contract address
    - modify state variables

  - function fetchMarketItems() public view returns (MarketItem[] memory) {}
    - to get all tokens which are listed for sale

  - function fetchMyNFTs() public view returns (MarketItem[] memory) {}
    - to get all tokens owned my an address

  - function fetchItemsListed() public view returns (MarketItem[] memory) {}
    - to get all tokens created by an address

## What's for V2.0?
- Fractionalized NFTs
- Improved Frontend
- Energized NFTs
- Collection listing
- Transfer NFT to wallet
- NFT activity log
- Video NFTs
- and more...
