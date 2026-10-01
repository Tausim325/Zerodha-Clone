import React, { useState } from 'react';

function AccordionItem({ title, items, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border rounded mb-3'>

        {/* Header */}
        <div
            className='d-flex justify-content-between align-items-center p-3'
            style={{
                backgroundColor: isOpen ? '#f5f8ff' : '#ffffff',
                cursor: 'pointer'
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className='d-flex align-items-center'>
                <i className={`fa ${icon} text-primary me-3 fs-5`}></i>
                <span className='fw-bold text-dark'>{title}</span>
            </div>
            <i className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-primary`}></i>
        </div>

        {/* Body - only shows when open */}
        {isOpen && (
            <ul className='p-4 mb-0' style={{ color: '#4a7dfc' }}>
                {items.map((item, index) => (
                    <li key={index} className='mb-3'>
                        <a href='' className='text-decoration-none'>{item}</a>
                    </li>
                ))}
            </ul>
        )}

    </div>
  );
}

function CreateTicket() {

    const accordionData = [
        {
            title: 'Account Opening',
            icon: 'fa-plus-circle',
            items: [
                'Resident individual',
                'Minor',
                'Non Resident Indian (NRI)',
                'Company, Partnership, HUF and LLP',
                'Glossary'
            ]
        },
        {
            title: 'Your Zerodha Account',
            icon: 'fa-user-circle',
            items: [
                'Your Profile',
                'Account modification',
                'Client Master Report (CMR) and Depository Participant (DP)',
                'Nomination',
                'Transfer and conversion of securities'
            ]
        },
        {
            title: 'Kite',
            icon: 'fa-play-circle',
            items: [
                'IPO',
                'Trading FAQs',
                'Margin Trading Facility (MTF) and Margins',
                'Charts and orders',
                'Alerts and Nudges',
                'General'
            ]
        },
        {
            title: 'Funds',
            icon: 'fa-rupee-sign',
            items: [
                'Add money',
                'Withdraw money',
                'Add bank accounts',
                'eMandates'
            ]
        },
        {
            title: 'Console',
            icon: 'fa-at',
            items: [
                'Portfolio',
                'Corporate actions',
                'Funds statement',
                'Reports',
                'Profile',
                'Segments'
            ]
        },
        {
            title: 'Coin',
            icon: 'fa-coins',
            items: [
                'Mutual funds',
                'National Pension Scheme (NPS)',
                'Fixed Deposit (FD)',
                'Features on Coin',
                'Payments and Orders',
                'General'
            ]
        }
    ];

    const announcements = [
        'Current Takeovers and Delisting – September 2026',
        'Surveillance measure on scrips - September 2026'
    ];

    const quickLinks = [
        'Track account opening',
        'Track segment activation',
        'Intraday margins',
        'Kite user manual',
        'Learn how to create a ticket'
    ];

    return ( 
        <div className='container mt-5'>
        <div className='row'>

        {/* Left side - accordion list (unchanged) */}
        <div className='col-6'>

            {accordionData.map((section, index) => (
                <AccordionItem 
                    key={index}
                    title={section.title} 
                    items={section.items} 
                    icon={section.icon}
                />
            ))}

        </div>

        {/* Right side - sidebar */}
        <div className='col-6'>

            {/* Announcements box */}
            <div 
                className='p-3 mb-4' 
                style={{ 
                    backgroundColor: '#fdf1e0', 
                    borderLeft: '4px solid #f5a623' 
                }}
            >
                <ul className='mb-0' style={{ color: '#333' }}>
                    {announcements.map((item, index) => (
                        <li key={index} className='mb-2'>
                            <a href='' className='text-decoration-underline text-dark'>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Quick links box */}
            <div className='border rounded'>
                <div className='p-3 fw-bold' style={{ backgroundColor: '#f0f0f0' }}>
                    Quick links
                </div>
                <ul className='list-unstyled mb-0'>
                    {quickLinks.map((item, index) => (
                        <li 
                            key={index} 
                            className='p-2 border-bottom' 
                            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            <a href='' className='text-decoration-none'>
                                {index + 1}. {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

        </div>
        </div>
     );
}

export default CreateTicket;
