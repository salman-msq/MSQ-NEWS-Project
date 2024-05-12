import React from 'react'

const NextPrev = ({ page, setPage }) => {
    return (
        <div class="container d-grid gap-2 d-md-flex justify-content-md-center">
            <button class="btn btn-primary fs-4" type="button" onClick={() => { const p = page - 1; setPage(p) }}>Prev</button>
            <button class="btn btn-primary fs-4" type="button" onClick={() => { const p = page + 1; setPage(p) }}>Next</button>
        </div>
    )
}

export default NextPrev
