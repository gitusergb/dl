import React from 'react';
import styled from 'styled-components';
import { usePagination, DOTS } from './usePagination';

const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer>
      <PaginationItem disabled={currentPage === 1} onClick={onPrevious}>
        <div className="arrow left" />
      </PaginationItem>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <PaginationItem key={pageNumber} className="dots">&#8230;</PaginationItem>;
        }

        return (
          <PaginationItem
            key={pageNumber}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem disabled={currentPage === lastPage} onClick={onNext}>
        <div className="arrow right" />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
`;

const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  cursor: pointer;
  background-color: ${props => (props.selected ? 'rgba(0, 0, 0, 0.08)' : 'transparent')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  .arrow {
    &::before {
      content: '';
      display: inline-block;
      width: 0.4em;
      height: 0.4em;
      border-right: 0.12em solid rgba(0, 0, 0, 0.87);
      border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    }
    &.left {
      transform: rotate(-135deg) translate(-50%);
    }
    &.right {
      transform: rotate(45deg);
    }
  }
  &:hover {
    background-color: ${props => (props.disabled ? 'transparent' : 'rgba(0, 0, 0, 0.04)')};
  }
  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }
`;
