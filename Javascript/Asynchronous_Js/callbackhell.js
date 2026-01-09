// callbackhell
// bbokhotel _> proceedPayment -> showBookingStatus  -> updateBookingHistory (APIs)

bookHotel(hotelId ,function(){//1
    if(error){
        handleError
    }else{
        proceedPayment(hotelId, function(){//2
            if(error){
                handleError
            }else{
                showBookingStatus(function(){//3
                    if(error){
                        handleError
                    }else{
                        updateBookingStatus(function(){//4
                            if(error){
                                handleError
                            }else{
                                success
                            }
                        })
                    }
                })
            }
        })
    }
});