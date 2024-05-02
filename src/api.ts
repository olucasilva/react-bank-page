export interface IAccountInfo {
    agency: string,
    accountNumber: string
    balance: number
    id: string
    loginDate: string
    token: string
}

export interface IUserInfo {
    name: string
    email: string
    id: string
    inclusionDate: string
    token: string
}

export interface IAuth {
    id: string
    token: string
}

const accounts = [
    {
        id: '1',
        agency: '0001',
        accountNumber: '10001',
        email: 'first@account.bank',
        password: '123456',
        name: 'James Bond',
        balance: 100000,
        inclusionDate: '2010-05-15',
        token: '12345'
    },
    {
        id: '2',
        agency: '0001',
        accountNumber: '10002',
        email: 'second@account.bank',
        password: '123456',
        name: 'Natasha Romanov',
        balance: 55950,
        inclusionDate: '2012-10-05',
        token: '54321'
    },
    {
        id: '3',
        agency: '0001',
        accountNumber: '10003',
        email: 'third@account.bank',
        password: '123456',
        name: 'Bruce Wayne',
        balance: 2501950,
        inclusionDate: '2018-02-10',
        token: '99999'
    }
]

export const authorization = (email: string, password: string) => {
    let authorization = {
        id: '',
        token: ''
    }

    accounts.forEach((account) => {
        if (account.email === email && account.password === password) {
            authorization = {
                id: account.id,
                token: account.token
            }
        }
    })

    return new Promise<IAuth>((resolve) => {
        setTimeout(() => {
            resolve(authorization)
        }, 1500)
    })
}

export const authentication = (token: string) => {
    let accountId = ''

    accounts.forEach((account) => {
        if (account.token === token) {
            accountId = account.id
        }
    })

    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(accountId)
        }, 1500)
    })
}

export const getAccountInfo = (id: string) => {
    let selectedAccount = {
        agency: '',
        accountNumber: '',
        balance: 0,
        id: '',
        loginDate: '',
        token: '',
    }

    accounts.forEach((account) => {
        if (account.id === id) {
            selectedAccount = {
                agency: `${account.agency}`,
                accountNumber: `${account.accountNumber}`,
                balance: account.balance,
                id: account.id,
                loginDate: getDateTimeNow(),
                token: `${account.token}`
            }
        }
    })

    return new Promise<IAccountInfo>((resolve) => {
        setTimeout(() => {
            resolve(selectedAccount)
        }, 1500)
    })
}

export const getUserInfo = (id: string) => {
    let selectedUser = {
        name: '',
        email: '',
        id: '',
        inclusionDate: '',
        token: ''
    }

    accounts.forEach((account) => {
        if (account.id === id) {
            selectedUser = {
                name: `${account.name}`,
                email: `${account.email}`,
                id: `${account.id}`,
                inclusionDate: dateFormat(account.inclusionDate),
                token: `${account.token}`
            }
        }
    })

    return new Promise<IUserInfo>((resolve) => {
        setTimeout(() => {
            resolve(selectedUser)
        }, 1500)
    })
}
export const getIdByToken = (token: string) => {
    let id = ''
    
    accounts.forEach((account) => {
        if (account.token === token) {
            id = account.id
        }
    })

    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(id)
        }, 1500)
    })
}
function dateFormat(date: string) {
    const currentDate = new Date(date)
    const refinedDate =
        (currentDate.getDate() + 1).toString().padStart(2, '0') + "/" +
        (currentDate.getMonth() + 1).toString().padStart(2, '0') + "/" +
        currentDate.getFullYear()

    return refinedDate
}
function getDateTimeNow(): string {
    const currentDate = new Date()
    const refinedDate =
        currentDate.getDate().toString().padStart(2, '0') + "/" +
        (currentDate.getMonth() + 1).toString().padStart(2, '0') + "/" +
        currentDate.getFullYear() + " " +
        currentDate.getHours() + ":" +
        currentDate.getMinutes()

    return `${refinedDate}`
}