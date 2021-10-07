export const formatPrice = (number) => {

    const newNumber = Intl.NumberFormat('fr-FR',{

        style:'currency',
        currency:'MAD',
        currencyDisplay:'symbol'
    }).format(number / 100)

    return newNumber;
}