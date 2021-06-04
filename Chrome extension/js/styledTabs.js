function styledTabs(user) {
    //console.log(user)
    if (!user.wallet) {
        $('#wallet').addClass('blinking');
        $('#nft-off').show()
        $('#nft-hash').text('N/A')

        if (!user.authorDetails) {
            $('#transaction').css('color', '#b6b6b6');
        } else {
            $('#transaction').css('color', '#b6b6b6');
            $('#wallet').removeClass('blinking');
        }
    } else if (!user.authorDetails) {
        $('#transaction').addClass('blinking');
        $('#nft-off').hide()

    } else {
        $('#nft-off').hide()
    }
}

export { styledTabs }