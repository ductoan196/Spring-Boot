(function($) {

    "use strict";

        $(document).ready(function() {

          /* Video */
          var $videoSrc;  
          $('.play-btn').click(function() {
              $videoSrc = $(this).data( "src" );
          });
          $('#myModal').on('shown.bs.modal', function (e) {
          $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
          })
          $('#myModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src',$videoSrc); 
          })

          $(".user-items .search-item").click(function(){
              $(".search-box").toggleClass('active');
              $(".search-box .search-input").focus();
            });
            $(".close-button").click(function(){
              $(".search-box").toggleClass('active');
            }); 


            // ------------------------------------------------------------------------------ //
            // Scroll Top 
            // ------------------------------------------------------------------------------ //
            var scrollToTopBtn = document.getElementById("scroll-top-btn");
            var rootElement = document.documentElement;

            function scrollToTop() {
              // Scroll to top logic
              rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }
            scrollToTopBtn.addEventListener("click", scrollToTop);

            // ------------------------------------------------------------------------------ //
            // Swiper
            // ------------------------------------------------------------------------------ //

            var swiper = new Swiper(".product-swiper", {
              slidesPerView: 3,
              spaceBetween: 20,
              navigation: {
                nextEl: ".icon-arrow-right",
                prevEl: ".icon-arrow-left",
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                901: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
              },
            });

            var swiper = new Swiper(".testimonial-swiper", {
              loop: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            });

            new DateTimePickerComponent.DatePicker( 'select-arrival-date' );
            new DateTimePickerComponent.DatePicker( 'select-departure-date' );            

        }); // End of a document


    })(jQuery);