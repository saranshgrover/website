import { Box } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { graphCommentId } from 'config/settings'

export default function Comments({ isOpen }) {
  useEffect(() => {
    if (isOpen) {
      window.gc_params = {
        graphcomment_id: graphCommentId,
        fixed_header_height: 0,
      };

      (function () {
        var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
        gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
      })();
    }
  }, [isOpen])

  return (
    <>
      {isOpen && <Box w='100vw' id='graphcomment'></Box>}
    </>
  )
}
