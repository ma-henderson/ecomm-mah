import React from 'react'

const ButtonBar = (prop) => {
  const state = [
    {category: 'High-end', models: ['iPhone 11', 'Galaxy 3000', 'Nokia L23']},
    {category: 'Mid-Tier', models: ['iPhone 10', 'LG50', 'Samsung A50']},
    {category: 'Pre-owned', models: ['iPhone 7S', 'Nokia 3310', 'Samsung J4']}
  ]

  return(

    <div class="btn-group btn-group-sm ml-auto text-center" role="group" aria-label="...">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            {state.map((item)=>{
              return(
                <div class="dropdown col">
                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {item.category}
                </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {item.models.map((model)=>{
                      return(
                        <a className="dropdown-item" href="#">{model}</a>
                      )
                      })
                    }
                    </div>
                    </div>
                )
              })
            }
      </div>
      </div>
  )
}

export default ButtonBar;