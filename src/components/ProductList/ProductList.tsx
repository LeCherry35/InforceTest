import React, { FC, useEffect, useState } from 'react'
import { getProductsAsync } from '../../async-actions/productsAction'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IProduct } from '../../types/models/IProduct'
import {showWIndowActionCreator } from '../../store/reducers/modalWindowReducer'
import * as _ from 'lodash'
import ModalWindow from '../ModalWindow/ModalWindow'
import s from './ProductList.module.sass'
import { useNavigate } from 'react-router-dom'

const ProductList: FC = () => {
    const {products} = useTypedSelector(state => state.products)
    const {hidden} = useTypedSelector(state => state.modalWindow)
    const [sortBy, setSortBy] = useState('name')
    const [sorted, setSorted] = useState(products)
    const [deleteId, setDeleteId] = useState(-1)

    const dispatch = useTypedDispatch()
    let navigate = useNavigate();

    useEffect(() => {
      dispatch(getProductsAsync())
    }, [hidden])
    useEffect(() => {
        switch (sortBy) {
            case 'name': 
                const productsSortedByName = _.cloneDeep(products)?.sort((a, b) => {
                    const nameA = a?.name?.toUpperCase(); // ignore upper and lowercase
                    const nameB = b?.name?.toUpperCase(); // ignore upper and lowercase
                    if(nameA && nameB) {
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                    }
                    return 0;
                })
                setSorted(productsSortedByName)
                break
            case 'count':
                const productsSortedByCount= _.cloneDeep(products)?.sort((a, b) => {
                    if (a.count && b.count) {
                        return b.count - a.count
                    } else {
                        const nameA = a?.name?.toUpperCase(); // ignore upper and lowercase
                        const nameB = b?.name?.toUpperCase(); // ignore upper and lowercase
                        if(nameA && nameB) {
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                        }
                        return 0;
                    }
                })
                setSorted(productsSortedByCount)
                break
        }
      }, [products,sortBy])

    const deleteProduct = (id: number) => {
        setDeleteId(id)
        dispatch(showWIndowActionCreator())
        
    }
    const addProduct = () => {
        setDeleteId(-1)
        dispatch(showWIndowActionCreator())
    }

    return (
        <div className={s.container}>
            {hidden 
                        ? <></>
                        :<ModalWindow id={deleteId} input={deleteId === -1 ? true : false}></ModalWindow>}
            {sorted?.map((product: IProduct) => {
                return(
                <div key={product.id} className={s.product}>
                    
                    <span className={s.name} onClick={(e) => navigate(`/product/${product.id}`)}> {product.name}</span>
                    <button className={s.button} onClick={() => deleteProduct(product.id || 1312)}>delete</button>
                </div>
                )
            })}
            <button className={s.button} onClick={() => addProduct()}>add product</button>
            <button className={s.button} onClick={() => setSortBy('name')}>n</button>
            <button className={s.button} onClick={() => setSortBy('count')}>c</button>
            


        </div>
    )
}

export default ProductList