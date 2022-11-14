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
import { sortByCount, sortByName } from '../../helpers/sort'

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
    }, [dispatch])
    useEffect(() => {
        
        switch (sortBy) {
            case 'name': 
                const productsSortedByName = products && sortByName(_.cloneDeep(products))
                setSorted(productsSortedByName)
                break
            case 'count':
                const productsSortedByCount= products && sortByCount(_.cloneDeep(products)) 
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
            <div className={s.sortPanel}>Sort by:
                <select  className={s.select} onChange={(e) => {
                    setSortBy(e.target.value)
                }}>
                    <option value='name'>name</option>
                    <option value='count'>count</option>

                </select>
            </div>
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
            
        </div>
    )
}

export default ProductList