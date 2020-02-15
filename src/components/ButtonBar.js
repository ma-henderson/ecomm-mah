import React from 'react'

const ButtonBar = (prop) => {
  const state = [
    {category: 'High-end', models: ['iPhone 11', 'Galaxy 3000', 'Nokia L23']},
    {category: 'Mid-Tier', models: ['iPhone 10', 'LG50', 'Samsung A50']},
    {category: 'Pre-owned', models: ['iPhone 7S', 'Nokia 3310', 'Samsung J4']}
  ]

  return(
    <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul class="navbar-nav ml-auto text-center">
            {state.map((item)=>{
              return(
                <li class="nav-item dropdown" style={{marginLeft:"20px"}}>
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {item.category}
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {item.models.map((model)=>{
                      return(
                        <a className="dropdown-item" href="#">{model}</a>
                      )
                      })
                    }
                  </div>
                </li>
                )
              })
            }
        </ul>
    </div>
  )
}

export default ButtonBar;