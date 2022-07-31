const axios = require('axios')

const baseUrl = 'https://api.joysticklabs.io/api/v1'

export class JoystickReward {
  constructor(key) {
    this.key = key
  }

  async rewardUser(walletAddress, tokenAmount) {
    try {
      if (!walletAddress) throw new Error('No wallet address')
      if (!tokenAmount) throw new Error('No token amount')

      if (typeof walletAddress !== 'string')
        throw new Error('Invalid wallet address')

      if (typeof tokenAmount !== 'number')
        throw new Error('Invalid token amount')

      if (tokenAmount <= 0)
        throw new Error('Token amount must be greater than zero')

      if (!this.key || typeof key !== 'string') throw new Error('Invalid key')
    } catch (error) {}
  }
}
