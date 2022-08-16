const url = 'https://api.joysticklabs.io/api/v1/reward'

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

      const data = {
        key: this.key,
        wallet_address: walletAddress,
        token_amount: tokenAmount,
      }

      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }

      const res = await fetch(url, config)

      return await res.json()
    } catch (error) {
      return error
    }
  }
}
