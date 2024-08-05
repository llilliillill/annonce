import './types'
import { AuthService } from '../services/AuthService'
import { API_URL } from '@/http'
import axios from 'axios'

export const useMainStore = defineStore('MainStore', () => {

    const selectValue = ref<string>('Все товары и услуги')
    const selectItems = ref<string[]>([
        'Все товары и услуги',
        'Гробы',
        'Урны',
        'Тапки',
        'Покрывало'
    ])

    let showPhone = ref<boolean>(false)
    const header = ref<Header | null>(null)
    const users = ref<User[]>([])
    const products = ref<Products[]>([])
    const company = ref<Company | null>(null)
    const user = ref<User | null>(null)
    const isLoadingApp = ref<boolean>(false)

    /* Показать номер телефона */
    const noPhone = () => {
        showPhone.value = !showPhone.value
    }

    /* Получить номер телефона */
    const getPhone = computed(() => {
        return showPhone.value && user.value ? user.value.phone : 'Показать номер телефона'
    })

    /* Кнопка "Продвигать" */
    const promote = (id: number) => {
        products.value.map(product => { 
            if (product.id === id) {
                product.status = 1
                return product
            }
        })
    }

    /* Авторизоваться */
    const login = async (username: string, password: string) => {
        try {
            const res = await AuthService.login({ username, password })
            localStorage.setItem('token', res.data.accessToken)
            user.value = res.data.user
            return user.value
        } catch(e: any) {
            console.log(e.res?.data?.message)
            return e.res?.data?.message
        }
    }

    /* Выйти из аккаунта */
    const logout = async () => {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            user.value = null
        } catch(e: any) {
            console.log(e.res?.data?.message)
        }
    }

    /* Проверяем авторизован ли пользователь */
    const checkAuth = async () => {
        try {
            const res = await axios.get(`${ API_URL }/refresh`, { withCredentials: true })
            localStorage.setItem('token', res.data.accessToken)
            user.value = res.data.user
        } catch(e: any) {
            console.log(e.res?.data?.message)
        } 
    }

    return {
        header,
        user,
        users,
        products,
        promote,
        company,
        noPhone,
        getPhone,
        selectValue,
        selectItems,
        showPhone,
        login,
        logout,
        checkAuth,
        isLoadingApp
    }
})