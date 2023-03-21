import { gql } from "@apollo/client";

export const GET_NFTS = gql`
  query GetNfts($page: Int, $pageSize: Int, $ownerId: String, $count: SortOrders, $isOnSale: Boolean, $isTradable: Boolean, $includeSales: Boolean, $category: String, ) {
    nfts(
      query: { 
        page: $page, 
        pageSize: $pageSize, 
        filter: {
          ownerId: $ownerId, 
          isOnSale: $isOnSale, 
          isTradable: $isTradable, 
          includeSales: $includeSales,
          category: $category
          }, 
        sort: {
          count: $count
          } 
        }
      ) {
      tokens {
      id
      tokenId
      count
      nftContractId
      tradable
      metadataUri
      totalCount
      createdAt
      updatedAt
      ownerId
      metadata {
        name
        decimals
        description
        image
        properties
      }
      sales {
        id
        tokenId
        count
        soldTo
        salePrice
        listingId
        reservePricePerToken
        buyoutPricePerToken
        tokenType
        listingType
        createdAt
        updatedAt
        currency
        startTime
        endTime
        status
      }
      }
      total
      remaining
    }
  }
`;


export const GET_SALES_NFT = gql`
  query GetSalesNft(
    $page: Int, 
    $pageSize: Int, 
    $count: SortOrders, 
    $ownerId: String, 
    $includeToken: Boolean, 
    # $category: String, 
    $minEndTime: String, 
    $maxStartTime: String, 
    $status: String) {
    sales(
      query: { 
        page: $page, 
        pageSize: $pageSize, 
        filter: {
          ownerId: $ownerId, 
          includeToken: $includeToken, 
          # category: $category, 
          minEndTime: $minEndTime,
          maxStartTime: $maxStartTime,
          status: $status
          }, 
        sort: {
          count: $count
          } 
        }
      ) {
        sales {
        id
        tokenId
        count
        soldTo
        salePrice
        token {
          id
          tokenId
          count
          nftContractId
          tradable
          metadataUri
          totalCount
          createdAt
          updatedAt
          ownerId
          metadata {
            name
            decimals
            description
            image
            properties
          }
        }
        listingId
        reservePricePerToken
        buyoutPricePerToken
        tokenType
        listingType
        createdAt
        updatedAt
        currency
        startTime
        endTime
        status
        removedAt
      }
      total
      remaining
    }
  }
`;


export const GET_SALE_NFT = gql`
  query GetSaleNft($id: Int! ) {
    sale(
        id: $id 
      ) {
        id
        tokenId
        count
        soldTo
        salePrice
        offers {
          id
          listingId
          offeror
          quantityWanted
          currency
          totalOfferAmount
        }
        token {
          id
          tokenId
          count
          nftContractId
          tradable
          metadataUri
          totalCount
          createdAt
          updatedAt
          ownerId
          metadata {
            name
            decimals
            description
            image
            properties
          }
        }
        listingId
        reservePricePerToken
        buyoutPricePerToken
        tokenType
        listingType
        createdAt
        updatedAt
        currency
        startTime
        endTime
        status
        removedAt
    }
  }
`;