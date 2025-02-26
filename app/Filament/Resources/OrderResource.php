<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrderResource\Pages;
use App\Models\Order;
use App\Models\User;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Auth;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';
    protected static ?string $activeNavigationIcon = 'heroicon-s-briefcase';
    protected static ?string $navigationGroup = 'Client';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationBadgeTooltip = 'Total order';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('user_id')->required()->label('User')->options([
                    User::all()->pluck('name', 'id')->toArray(),
                ]),
                TextInput::make('price')->required()->label('Price')->numeric()->prefix('Rp'),
                Select::make('confirmed')->required()->label('Confirmed')->options([
                    'True' => 'True',
                    'False' => 'False',
                ]),
                Select::make('paid')->required()->label('Paid')->options([
                    'True' => 'True',
                    'False' => 'False',
                ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->label('ID')->sortable(),
                Tables\Columns\TextColumn::make('user.name')->label('User')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('price')->label('Price')->searchable(),
                Tables\Columns\TextColumn::make('discountedPrice')->label('Discounted Price')->searchable(),
                Tables\Columns\BadgeColumn::make('confirmed')->label('Confirmed')->searchable()->colors([
                    'primary' => 'True',
                    'danger' => 'False',
                ]),
                Tables\Columns\BadgeColumn::make('paid')->label('Paid')->searchable()->colors([
                    'primary' => 'True',
                    'danger' => 'False',
                ]),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\DeleteAction::make(),
                Action::make('Confirm')->visible(
                    fn($record) => $record->confirmed === "False"
                )->action(fn($record) => self::confirmOrder($record))->icon('heroicon-o-check'),
                Action::make('Cancel')->color('danger')->visible(
                    fn($record) => $record->confirmed === "True"
                )->action(fn($record) => self::cancelOrder($record))->icon('heroicon-o-x-circle'),
                Tables\Actions\ForceDeleteAction::make(),
                Tables\Actions\RestoreAction::make(),
                Tables\Actions\Action::make('Proof')->icon('heroicon-o-receipt-refund')->url(fn($record) => route('filament.admin.resources.payment-proofs.index', ['order_id' => $record->id])),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }
    public static function confirmOrder($order)
    {
        $order->load('order_item.product');
        foreach ($order->order_item as $item) {
            $product = $item->product;
            if ($product && $product->stock >= $order->quantity) {
                $product->decrement('stock', $item->quantity);
            } else {
                Notification::make()->danger()->title('Error');
            }
        }
        $order->update([
            'confirmed' => "True",
        ]);
        Notification::make()->success()->title('Order confirmed')->send();
    }
    public static function cancelOrder(Order $order)
    {
        $order->load('order_item.product');
        foreach ($order->order_item as $item) {
            $product = $item->product;
            if ($product) {
                $product->increment('stock', $item->quantity);
            } else {
                Notification::make()->danger()->title('Error saat cancel order')->send();
            }
        }
        $order->update([
            'confirmed' => "False",
        ]);
        $user = Auth::guard('user')->user();
        Notification::make()->success()->title('Order canceled')->send();
    }
    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }
    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }
    public static function getNavigationBadgeColor(): ?string
    {
        return 'info';
    }
}
